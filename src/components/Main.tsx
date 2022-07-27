import { useState } from "react";
import initialEmails, { Email } from "../data/emails";







function Main (){
    
const [emails, setEmails] = useState(initialEmails);
const [hideRead] = useState(false);
const [currentTab] = useState("inbox");


const getReadEmails = (emails: Email[]) =>
emails.filter((email) => !email.read);

const getStarredEmails = (emails: Email[]) =>
emails.filter((email) => email.starred);

const toggleStar = (targetEmail: Email) => {
  const updatedEmails = (emails: Array<Email>) =>
    emails.map((email) =>
      email.id === targetEmail.id
        ? { ...email, starred: !email.starred }
        : email
    );
  setEmails(updatedEmails);
};

const toggleRead = (targetEmail: Email) => {
  const updatedEmails = (emails: Array<Email>) =>
    emails.map((email) =>
      email.id === targetEmail.id ? { ...email, read: !email.read } : email
    );
  setEmails(updatedEmails);
};

function getFilteredEmails(): Array<Email> {
  let filteredEmails = emails;

  if (hideRead) {
    filteredEmails = getReadEmails(filteredEmails);
  }

  if (currentTab === "starred") {
    filteredEmails = getStarredEmails(filteredEmails);
  }

  return filteredEmails;
}




    return (
<main className="emails">
        <ul>
          {getFilteredEmails().map((email, index) => (
            <li
              key={index}
              className={`email ${email.read ? "read" : "unread"}`}
            >
              <div className="select">
                <input
                  className="select-checkbox"
                  type="checkbox"
                  checked={email.read}
                  onChange={() => toggleRead(email)}
                />
              </div>
              <div className="star">
                <input
                  className="star-checkbox"
                  type="checkbox"
                  checked={email.starred}
                  onChange={() => toggleStar(email)}
                />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          ))}
        </ul>
      </main>
    )
}
export default Main;



 
