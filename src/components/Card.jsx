/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div className='card'>
      <p className='card__year body-m'>{props.year}</p>

      <div className='card__content'>
        <p className='card__text'>{props.text}</p>
      </div>
    </div>
  );
}
