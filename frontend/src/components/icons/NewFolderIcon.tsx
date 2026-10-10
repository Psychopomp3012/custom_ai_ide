const NewFolderIcon = ({ className }: { className: string }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 3l.5.5v5h-1V4H7.7l-.85-.85L6.5 3h-5l-.5.5v10l.5.5h6v-1H2V4h4l1 1h7M15 11h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z" />
        </svg>
    )
}

export default NewFolderIcon;
