import Link from "next/link";

async function fetchRepoContents(name) {
  const response = await fetch(`https://api.github.com/repos/lalitsawantt/${name}/contents`,
  {
    next:{
      revalidate:60
    }
  })
  const contents = await response.json();
  await new Promise((resolve) => setTimeout(resolve,3000));
  return contents;
}

const RepoDirs = async({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir')
   return (
     <>
      <h3>Directories</h3>
      <p>
        {/* {JSON.stringify(contents)} */}
      </p>
      <ul>
         {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>
              {dir.path}
            </Link>
          </li>
         ))}
      </ul>
     </>
   )
 }
 
 export default RepoDirs