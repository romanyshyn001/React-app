import React from "react";
import { createField } from "../../../common/FormsControls/FormsControl";
import { useFormik } from "formik";
import { useState } from "react";

const ProfileDataForm = ({
  profile,
  isOwner,
  saveProfile,
  setEditMode,
  editMode,
}) => {
  const [fullName, setFullName] = useState(profile.fullName);
  const [aboutMe, setAboutMe] = useState(profile.aboutMe);
  // console.log(profile);
  const handleSubmit = (event) => {
    event.preventDefault();
    // ДОРОБИТИ добавити useState(), та значення
    saveProfile({
      fullName: fullName,
      aboutMe: aboutMe,
      lookingForAJobDescription: "react",
      lookingForAJob: false,
    });
    //
    setEditMode(false);
    console.log("form submitted ✅", fullName);
  };
  //зробити замикання так щоб функція для кожного інпута була інша

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createField(
          "fullName",
          "fullName",
          "text",
          (event) => setFullName(event.target.value),
          null,
          fullName,
          "Full name"
        )}
        {createField(
          "aboutMe",
          "aboutMe",
          "text",
          (event) => setAboutMe(event.target.value),
          null,
          aboutMe,
          "aboutMe"
        )}
        {/* <input
          type="text"
          id="first"
          name="first"
          value={first}
          onChange={event => setFirst(event.target.value)}
        /> */}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
// const ProfileDataForm = ({ profile, isOwner, saveProfile, setEditMode }) => {
//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       lookingForAjob: false,
//       lookingForAJobDescription: "",
//       aboutMe: "",
//       contacts: {
//         facebook: "",
//       },
//     },

//     onSubmit: (values) => {
//       console.log("values", values);
//       console.log("profile", profile);
//       saveProfile(values);
//       setEditMode(false);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       {isOwner && (
//         <div>
//           <button>save</button>
//         </div>
//       )}
//       <div>
//         <b>FullName</b>:{" "}
//         {createField(
//           "fullName",
//           "fullName",
//           "text",
//           formik.handleChange,
//           formik.handleBlur,
//           formik.values.fullName,
//           "Full name"
//         )}
//       </div>
//       <div>
//         <b>Looking for a job</b>:
//         {createField(
//           "lookingForAjob",
//           "lookingForAjob",
//           "checkbox",
//           formik.handleChange,
//           formik.handleBlur,
//           formik.values.lookingForAjob,
//           ""
//         )}
//       </div>
//       <div>
//         <b>My professional skills</b>:
//         {createField(
//           "lookingForAJobDescription",
//           "lookingForAJobDescription",
//           "textarea",
//           formik.handleChange,
//           formik.handleBlur,
//           formik.values.lookingForAJobDescription,
//           "My professional skills"
//         )}
//       </div>
//       <div>
//         <b>About me</b>:
//         {createField(
//           "aboutMe",
//           "aboutMe",
//           "textarea",
//           formik.handleChange,
//           formik.handleBlur,
//           formik.values.aboutMe,
//           "About me"
//         )}
//       </div>
//       <div>
//         <b>Contacts</b>:
//         {createField(
//           "contacts.facebook",
//           "contacts.facebook",
//           "text",
//           formik.handleChange,
//           formik.handleBlur,
//           formik.values.contacts.facebook
//         )}
//         {/* {Object.keys(profile.contacts).map((key, idValue) => {
//           return (
//             <div key={idValue}>
//               <b>
//                 {key}:{" "}
//                 {createField(
//                   "contacts.facebook",
//                   "contacts.facebook",
//                   "text",
//                   formik.handleChange,
//                   formik.handleBlur,
//                   formik.values.contacts.key,
//                   key
//                 )}
//               </b>
//             </div>
//           );
//         })} */}
//       </div>
//     </form>
//   );
// };

export default ProfileDataForm;
