function Simple_btn({colour, text}) {

    const buttonStyle = {
        backgroundColor: colour,
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
    }

    return <button style={buttonStyle}>{text}</button>
}

export default Simple_btn