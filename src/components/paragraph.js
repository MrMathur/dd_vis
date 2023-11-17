export default function Paragraph(props) {
  return (
    <p
      className="text-xl min-h-screen text-gray-900 mb-4"
      id={props.id != undefined ? props.id : ""}
    >
      {props.children}
    </p>
  );
}
