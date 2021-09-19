//Formik
import { useFormik } from 'formik';
import * as yup from 'yup';

const Formiks = () => {
    const formik = useFormik({
        initialValues: {
          orgName: '',
        },
        onSubmit: () => {
          console.log("works")
        },
      })

      return(
          formik
      )
}

export default Formiks
