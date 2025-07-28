export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
    return (
        <div className="w-full h-[5px]">
            <div
                className="progress-bar-fill"
                style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #4ade80, #22c55e)',
                    borderRadius: '10px 0 0 10px',
                    transition: 'width 0.5s ease-in-out',
                }}
            />
        </div>
    )
}