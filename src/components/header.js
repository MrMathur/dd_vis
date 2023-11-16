export default function Header(props) {
  return(
    <h1 className='text-5xl font-semibold text-gray-700 mb-8'>
      {props.children}
    </h1>
  );
}