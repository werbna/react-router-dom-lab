import { useParams } from "react-router-dom";

const MailboxDetail = ({mailboxes}) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId))

  if (!mailbox) {
    return <p>Mailbox not Found!</p>
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>Box Number: {mailbox.id} </p>
      <p>Boxholder: {mailbox.boxholder}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </div>
  )};

export default MailboxDetail;