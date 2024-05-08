/* eslint-disable react/prop-types */
export default function OtherProject(props) {
  return (
    <div className='project-s'>
      <h4 className='project-s__heading'>{props.heading}</h4>
      <p className='project-s__text'>{props.text}</p>
    </div>
  );
}
