import styles from "../styles/TdSort.module.css"
import Image from "next/image"

export default function TdSort({
  title,
  onColumnClick,
  sortedStyle,
}: {
  title: string
  onColumnClick: (colName: string) => void
  sortedStyle: boolean
}) {
  let sortedClass = sortedStyle ? styles.sorted : ""

  return (
    <td
      className={styles.sort + " " + sortedClass}
      onClick={() => {
        onColumnClick(title)
      }}
    >
      {title}
      <Image src="/arrow.webp" alt="down arrow" width="15" height="15" />
    </td>
  )
}
