import classes from './Center.module.css'

export function Center(props) {
    return (
        <div className={classes.center}>
            <p>{props.page}&nbsp;page</p>
        </div>
    )
}
