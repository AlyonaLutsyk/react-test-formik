import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./UserForm.module.css";
import * as Yup from "yup";

const UserSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too short, min 3 letters!").max(15, "Too long, max 15 letters").required("This field is required"),
    email: Yup.string().email('Must be in email format!').required("This field is required"),
    role: Yup.string().oneOf(["guest", "user", "admin"]).required("This field is required"),
    comment: Yup.string().max(100, "Too long, max 100 letters").required("This field is required"),
    options: Yup.array().min(0).max(3).required("This field is required"),
});

export default function UserForm() {
    return (
        <Formik initialValues={{
            username: "",
            email: "",
            role: "user",
            comment: "",
            option: [],
        }}
            onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
            }}
            validationSchema={UserSchema}
        >
       <Form className={css.form}>
        <div className={css.formGroup}>
            <label htmlFor="">Username:</label>
                    <Field className={css.input} type="text" name="username" />
                    <ErrorMessage name="username" component="span" className={css.error} />
        </div>

        <div className={css.formGroup}>
            <label htmlFor="">Email:</label>
                    <Field className={css.input} type="email" name="email" />
                    <ErrorMessage name="email" component="span" className={css.error}/>
        </div>

        <div className={css.formGroup}>
            <label htmlFor="">Role:</label>
            <Field as="select" className={css.input} name="role" id="">
                <option value="guest">Guest</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                    </Field>
                    <ErrorMessage name="role" component="span" className={css.error}/>
        </div>

        <div>
            <label htmlFor="">Comment:</label>
                    <Field as="textarea" className={css.input} name="comment" id=""></Field>
                    <ErrorMessage name="comment" component="span" className={css.error}/>
        </div>
        
                <div className={css.formGroup}>
                    <div>
                        <Field type="checkbox" name="options" value="a"/> A
                    </div>
                     <div>
                        <Field type="checkbox" name="options" value="b"/> B
                    </div>
                     <div>
                        <Field type="checkbox" name="options" value="c"/> C
                    </div>
                    <ErrorMessage name="options" component="span" className={css.error} />
        </div>

        <button type="submit">Submit</button>
   </Form>
   </Formik>
   )
}