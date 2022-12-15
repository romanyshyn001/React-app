import { Field, Form, Formik } from "formik";
import React from 'react'
import { useSelector } from "react-redux";
import { getUserFilter } from "../../redux/users-selectors";
import { FilterType } from "../../redux/usersReducers";

const usersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}
type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}
type Formtype = {
  term: string
  friend: "true" | "false" | "null"
}
type FriendFormType = 'true' | 'false' | 'null'

const UserSearchForm: React.FC<PropsType> = React.memo((props) => {
  const filter = useSelector(getUserFilter)
  const submit = (values: Formtype, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
    }

    props.onFilterChanged(filter)
    setSubmitting(false)
  }
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType }}
        validate={usersSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />

            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
})
export default UserSearchForm