import { useHistory } from "react-router-dom";

import Avatar from "../../../components/avatar/Avatar";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFirestore } from "../../../hooks/useFirestore";

// styles
import "../Projects.css";

function ProjectSummary({ project }) {
  const { deleteDocument } = useFirestore("projects");
  const { user } = useAuthContext();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    deleteDocument(project.id);
    history.push("/");
  };

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p>By {project.createdBy.displayName} </p>
        <p className="due-date">
          Project due by {project.dueDate.toDate().toDateString()}
        </p>

        <p className="details">{project.details}</p>

        <h4>Project is assigned to:</h4>
        <div className="assigned-users ">
          {project.assignedUsersList.map((user) => (
            <div className="assignee" key={user.id}>
              <Avatar src={user.photoURL} />
              <span>{user.displayName} </span>
            </div>
          ))}
        </div>
      </div>

      {user.uid === project.createdBy.id && (
        <button className="btn" onClick={handleClick}>
          Mark as Complete
        </button>
      )}
    </div>
  );
}

export default ProjectSummary;
