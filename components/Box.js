import styles from './Box.module.css'

export default function Box(props) {
    const { children } = props
    return (
        <div className={styles.box}
        >
            {children}
        </div>
    )
}
