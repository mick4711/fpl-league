import styles from "../styles/TdSort.module.css"
export default function TdSort({ title, onColumnClick }: { title: string; onColumnClick: any }) {
  return (
    // TODO customise with a symbol and background
    <td
      className={styles.sort}
      onClick={() => {
        console.log({onColumnClick})
        {onColumnClick(title)}
      }}
    >
      {title}
    </td>
  )
}
