export default function Section(props) {
  return(
    <div className='flex w-full items-start'>
      <div className={props.type == 'right' ? 'shrink-0 w-3/4' : 'hidden'}></div>
      <div className={ props.type == 'center' ? 'shrink-0 w-1/2 mx-auto text-center mt-20' : 'shrink-0 w-1/4 text-left mt-20'}>
        {props.children}
      </div>
      <div className={props.type == 'left' ? 'shrink-0 w-3/4' : 'hidden'}></div>
    </div>
  );
}