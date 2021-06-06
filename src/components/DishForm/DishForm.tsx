import {
  Form,
  Card,
  Input,
  Button,
  Select,
  TimePicker,
  InputNumber,
  Alert,
} from "antd";
import { useEffect, useState } from "react";
import "./DishForm.css";
import { PostDishRequest } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { dishActions, dishSelectors } from "../../store/slices/dishSlices";

const { Option } = Select;

const DishForm = () => {
  const [form] = Form.useForm<PostDishRequest>();
  const [dishType, setDishType] = useState<string>();
  const success = useSelector(dishSelectors.selectPostDishSuccess);
  const error = useSelector(dishSelectors.selectPostDishError);
  const dispatch = useDispatch();
  const onFinish = (values: PostDishRequest) => {
    dispatch(dishActions.postDishRequest(values));
  };

  const handleChange = (type: string) => {
    setDishType(type);
  };

  return (
    <Card className="dish-form">
      <Form form={form} name="basic" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Dish name:"
          name="dishName"
          rules={[{ required: true, message: "Please input dish name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Preparation time:"
          name="preparationTime"
          rules={[
            { required: true, message: "Please input preparation time!" },
          ]}
        >
          <TimePicker />
        </Form.Item>
        <Form.Item
          label="Dish type:"
          name="dishType"
          rules={[{ required: true, message: "Please select dish type!" }]}
        >
          <Select onChange={handleChange}>
            <Option value="pizza">Pizza</Option>
            <Option value="soup">Soup</Option>
            <Option value="sandwich">Sandwich</Option>
          </Select>
        </Form.Item>

        {form.getFieldValue("dishType") === "pizza" && (
          <section>
            <Form.Item
              label="Number of slices"
              name="numOfSlices"
              rules={[
                { required: true, message: "Please select number of slices!" },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="Diameter"
              name="diameter"
              rules={[
                { required: true, message: "Please select the diameter!" },
              ]}
            >
              <InputNumber min="0" step="1" precision={2} />
            </Form.Item>
          </section>
        )}
        {form.getFieldValue("dishType") === "soup" && (
          <Form.Item
            label="Spiciness scale"
            name="spiciness"
            rules={[{ required: true, message: "Please select spiceness!" }]}
          >
            <InputNumber min="0" max="10" step="1" />
          </Form.Item>
        )}
        {form.getFieldValue("dishType") === "sandwich" && (
          <Form.Item
            label="Slices of bread"
            name="numOfSlices"
            rules={[
              { required: true, message: "Please select number of slices!" },
            ]}
          >
            <InputNumber min="0" />
          </Form.Item>
        )}
        {error && <Alert message="Error!" type="error" />}
        {success && <Alert message="Success!" type="success" />}
        <p>&nbsp;</p>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default DishForm;
