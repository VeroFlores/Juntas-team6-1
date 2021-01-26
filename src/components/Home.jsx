import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './Form';

const Home = (props) => {
  const { handleSubmitForm } = props;
  return (
    <>
      <FormSection handleSubmitForm={handleSubmitForm} />
    </>
  );
};
export default Home;
Home.propTypes = {
  // handleInputChange: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,

};
// Home.propTypes = {
//   handleInputChange: PropTypes.func.isRequired,

//   submitForm: PropTypes.func.isRequired,
// };
