import { Button } from "@shared/ui/Button"
import { ProgressBar } from "@shared/ui/ProgressBar";
import { TextInput } from "@shared/ui/TextInput"
import { useState } from "react"

export const SignUp: React.FC = () => {
    const [progress, setProgress] = useState<number>(0);
    return (
        <div className="p-[10px] flex flex-col gap-2">
            <ProgressBar progress={progress} />
            <TextInput />
            <Button onClick={() => setProgress(prev => prev + 10)}>Continue</Button>
        </div>
    )
}