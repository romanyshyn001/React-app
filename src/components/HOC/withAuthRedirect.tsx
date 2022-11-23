import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppStateType } from "../../redux/redux-store";


let mapStateToPropsForNavigate = (state: AppStateType) => ({
   isAuth: state.auth.isAuth
} as MapPropsType)

type MapPropsType = {
   isAuth: boolean
}
type DispatchPropsType = {
}
export function withAuthNavigate(Component: React.ComponentType) {

   const NavigateComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
      // console.log('props', props)
      let { isAuth, ...restProps } = props

      if (!isAuth)

         return <Navigate to="/Login" />
      return <Component {...restProps} />
   }


   let ConnectedAuthNavigateComponent = connect<MapPropsType, {}, {}, AppStateType>(mapStateToPropsForNavigate)(NavigateComponent)
   return ConnectedAuthNavigateComponent
}