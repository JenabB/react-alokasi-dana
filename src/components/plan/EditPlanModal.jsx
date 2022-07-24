import React, { useState, useContext } from "react";
import { GlobalContext } from "context/GlobalState";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const createPlanSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  date: Yup.string().email("Invalid email").required("Required"),
});

const EditPlanModal = ({ isEdit, handleEdit, selectedId }) => {
  const { editPlan, plan } = useContext(GlobalContext);

  const matchPlan = plan.find((el) => el.planId === selectedId);

  <Formik
    initialValues={{
      name: matchPlan ? matchPlan.name : "",
      price: matchPlan ? matchPlan.price : "",
      date: matchPlan ? matchPlan.date : null,
    }}
    validationSchema={createPlanSchema}
    onSubmit={(values) => {
      // same shape as initial values
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="firstName" />
        {errors.firstName && touched.firstName ? (
          <div>{errors.firstName}</div>
        ) : null}
        <Field name="lastName" />
        {errors.lastName && touched.lastName ? (
          <div>{errors.lastName}</div>
        ) : null}
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>;

  const [payload, setPayload] = useState({
    name: matchPlan ? matchPlan.name : "",
    price: matchPlan ? matchPlan.price : "",
    date: matchPlan ? matchPlan.date : null,
  });

  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editPlan({
      planId: matchPlan.planId,
      createdAt: matchPlan.createdAt,
      name: payload.name,
      price: parseInt(payload.price),
      date: payload.date,
      complete: matchPlan.complete,
    });
  };

  return (
    <>
      {isEdit && (
        <div
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
          }}
          className="bg-white lg:w-1/4 xs:w-3/4 shadow-lg p-4 rounded-md absolute z-10 top-20"
        >
          <div className="flex justify-between">
            <div></div>
            <button className="material-icons text-red" onClick={handleEdit}>
              close
            </button>
          </div>
          <h1 className="text-xl mb-4">Ubah Plan</h1>
          <div className="p-4">
            <input
              type="text"
              placeholder={matchPlan.name}
              name="name"
              className="bg-input w-full p-2 m-2 rounded-md"
              value={payload.name}
              onChange={handleChange}
            />
            <br />
            <input
              type="number"
              name="price"
              placeholder={matchPlan.price}
              className="bg-input p-2 m-2 w-full mb-8 rounded-lg"
              value={payload.price}
              onChange={handleChange}
            />
            <br />
            <label>Rencana akan dilakukan</label>
            <input
              type="date"
              name="date"
              className="bg-input p-2 m-2 rounded-lg"
              value={payload.date}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              className="flex bg-primary px-3 py-1 justify-center items-center rounded-lg"
              onClick={handleSubmit}
            >
              <h1 className="material-icons text-white">save</h1>
              <h1 className="text-white">simpan</h1>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPlanModal;
