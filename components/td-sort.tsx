import styles from "../styles/TdSort.module.css"

interface Props {
  title: string
  onColumnClick: (colName: string) => void
}

export default function TdSort({ title, onColumnClick }: Props) {
  return (
    // TODO customise with a symbol and background
    <td
      className={styles.sort}
      onClick={() => {
        {
          onColumnClick(title)
        }
      }}
    >
      {title}
      <img src="./arrow.webp" alt="down arrow" width="15" height="15" />
    </td>
  )
}
