import React, { useState } from 'react'
import { FilterType } from "../../redux/usersReducers";
import { Button, Input, Form, Radio, RadioChangeEvent, Col, Row } from 'antd';
import s from './users.module.css'


type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}
type Formtype = {
  term: string
  friend: "true" | "false" | "null"
}


const UserSearchForm: React.FC<PropsType> = React.memo((props) => {
  const [form] = Form.useForm()
  const [currentBtn, setCurrentBtn] = useState('');

  const filterObj = { term: '', friend: '' }
  const checkFriend = (friend: {}) => {
    return friend === 'null' || undefined ? null : friend === 'true' ? true : false
  }

  const onFinish = (value: Formtype) => {
    filterObj.term = value.term
    filterObj.friend = currentBtn
    const filter = {
      term: filterObj.term,
      friend: checkFriend(filterObj.friend)
    }
    props.onFilterChanged(filter)
  };

  const onChangeRadio = ({ target: { value } }: RadioChangeEvent) => {
    filterObj.friend = value
    setCurrentBtn(value)
    const filter: FilterType = {
      term: filterObj.term,
      friend: checkFriend(filterObj.friend)
    }
    props.onFilterChanged(filter)
  };


  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
        <Form  form={form} name="control-hooks" onFinish={onFinish} >
          <Col className="gutter-row" span={22}>
            <Form.Item name="term" >
              <Input placeholder='Find'/>
            </Form.Item >
          </Col>

          <Col className="gutter-row" span={9} >
            <Radio.Group onChange={onChangeRadio} defaultValue="null" style={{display: "flex"}}>
              <Radio.Button value="null">All</Radio.Button>
              <Radio.Button value="true">Follow</Radio.Button>
              <Radio.Button value="false">Unfollow</Radio.Button>
            </Radio.Group>

              <Button className={s.btn} type="primary" htmlType="submit">
                Submit
              </Button>
          </Col>
            <Form.Item   >

            </Form.Item>
        </Form>
      </Row>

    </>
  );
})
export default UserSearchForm


