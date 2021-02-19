import styles from '../styles/TdSort.module.css'
export default function TdSort({ title }: { title: string }) {
  return (
    // TODO customise with a symbol and convert to component
    <td className={styles.sort}>{title}</td>
  )
}
