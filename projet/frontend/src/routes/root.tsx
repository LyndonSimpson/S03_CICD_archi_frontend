export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>routes</h1>
          
          <nav>
            <ul>
              <li>
                <a href={`/home`}>Home</a>
              </li>
              <li>
                <a href={`/vite-example`}>vite-example</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }