type ButtonProps = {
    text: string
    message: string
}

function handleClick(message: string) {
    alert(message)
}

export function Button({ text, message }: ButtonProps) {
    return (
        <button onClick={() => alert(message)}>{text}</button>
    )
}

// if submit it should submitted successfully,
// if cancel it should cancelled successfully.