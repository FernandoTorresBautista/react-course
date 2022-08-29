import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle} ) => {
  return (
    <>
        <h1>{ title }</h1>
        <p>{ subtitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
}
