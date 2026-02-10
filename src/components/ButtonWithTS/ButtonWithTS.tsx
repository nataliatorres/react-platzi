type ButtonWithTSProps = {
    onclick: () => void;
    label: string | number;
}

const ButtonWithTS = ({ onclick, label }: ButtonWithTSProps) => {
    return <button onClick={onclick}>{label}</button>
}

export default ButtonWithTS;