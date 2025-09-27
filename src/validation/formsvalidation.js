import * as yup from 'yup';

// Application form validation schema
const applicationValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be at most 50 characters')
    .required('Name is required'),
  email: yup.string().trim().email('Enter a valid email address').required('Email is required'),
  phone: yup
    .string()
    .trim()
    .matches(/^[0-9]{10,15}$/, 'Enter a valid phone number')
    .required('Phone number is required'),
  job: yup.string().required('Job position is required'),
  resume: yup
    .mixed()
    .required('Resume is required')
    .test('fileType', 'Supported formats: PDF, DOC, DOCX', (value) => {
      if (!value) return false;
      const allowed = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];
      return allowed.includes(value.type);
    })
    .test('fileSize', 'File too large (max 5MB)', (value) => {
      if (!value) return false;
      return value.size <= 5 * 1024 * 1024;
    }),
});

export default applicationValidationSchema;
