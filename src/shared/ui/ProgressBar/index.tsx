export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
    return (
        <div className="w-full h-[10px] bg-[#F0F2F4]">
            <div
                className="h-full progress-bar-fill transition-[width] duration-500 ease-in-out bg-linear-to-tr from-[#FD267A] to-[#FF6036]"
                style={{
                    width: `${progress > 100 ? 100: progress}%`,
                    // height: '100%',
                    // background: 'linear-gradient(90deg, #4ade80, #22c55e)',
                    // borderRadius: '10px 0 0 10px',
                    // transition: 'width 0.5s ease-in-out',
                }}
            />
        </div>
    )
}