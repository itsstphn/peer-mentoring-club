import "./Creator.css";

const Creator = () => {
  return (
    <div className="creator">
      <p>
        Hi! Im Stephen Talorong, a BSIT 3-C student of CPSU. Thanks for checking
        out my website.
      </p>
      <p>A project submitted for the subject CCIT06.</p>
      <p>This is not an official website. For educational purposes only.</p>
      <form name="Feedback" method="post" data-netlify="true">
        <p>Please leave a feedback</p>
        <input type="text" name="feedback" />
        <button className="button-tertiary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Creator;
