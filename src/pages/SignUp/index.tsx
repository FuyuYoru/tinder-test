import { useState, useRef, useEffect } from "react"
import { checkLogin } from "@features/auth/api/checkLogin"
import { signUp } from "@features/auth/api/signup"
import { Button } from "@shared/ui/Button"
import { ProgressBar } from "@shared/ui/ProgressBar"
import { TextInput } from "@shared/ui/TextInput"
import { Typography } from "@shared/ui/Typography"

enum Step {
    Login = "login",
    Password = "password",
    Created = "created"
}

const progressMapping = {
    [Step.Login]: { progress: 0, message: 'Enter your login' },
    [Step.Password]: { progress: 50, message: 'Enter your password' },
    [Step.Created]: { progress: 100, message: 'Successfully!' }
}

export const SignUp: React.FC = () => {
    const [step, setStep] = useState<Step>(Step.Login)
    const [login, setLogin] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [redirectSeconds, setRedirectSeconds] = useState(5)

    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (step === Step.Login) loginRef.current?.focus()
        if (step === Step.Password) passwordRef.current?.focus()
        if (step === Step.Created) {
            const interval = setInterval(() => {
                setRedirectSeconds((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval)
                        // Optional redirect here:
                        // navigate('/dashboard') or similar
                    }
                    return prev - 1
                })
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [step])

    const handleContinue = async () => {
        setError(null)

        if (step === Step.Login) {
            if (login.length < 5) {
                setError("Login must be at least 5 characters")
                return
            }

            setLoading(true)
            const available = await checkLogin(login)
            setLoading(false)

            if (!available) {
                setError("Login is already taken")
                return
            }

            setStep(Step.Password)
            return
        }

        if (step === Step.Password) {
            if (password1.length < 6) {
                setError("Password must be at least 6 characters")
                return
            }

            if (password1 !== password2) {
                setError("Passwords do not match")
                return
            }

            setLoading(true)
            try {
                await signUp(login, password1)
                setStep(Step.Created)
                setRedirectSeconds(5)
            } catch {
                setError("Something went wrong. Try again.")
            } finally {
                setLoading(false)
            }
        }
    }

    const handleBack = () => {
        if (step === Step.Password) {
            setStep(Step.Login)
            setPassword1('')
            setPassword2('')
            setError(null)
        }
    }

    return (
        <div className="flex flex-col">
            <ProgressBar progress={progressMapping[step].progress} />

            <div className="flex flex-col py-4 gap-3 px-4">
                <Typography variant="extraBold22">
                    {progressMapping[step].message}
                </Typography>

                {step === Step.Login && (
                    <TextInput
                        inputRef={loginRef}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        placeholder="Login (min 5 characters)"
                    />
                )}

                {step === Step.Password && (
                    <>
                        <TextInput
                            inputRef={passwordRef}
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                            type="password"
                            placeholder="Password"
                        />
                        <TextInput
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            type="password"
                            placeholder="Confirm Password"
                        />
                    </>
                )}

                {error && (
                    <Typography classNames="text-red-500 text-sm" variant="regular17">
                        {error}
                    </Typography>
                )}

                {step !== Step.Created ? (
                    <div className="flex gap-2">
                        {step === Step.Password && (
                            <Button onClick={handleBack}>
                                Back
                            </Button>
                        )}
                        <Button onClick={handleContinue} disabled={loading}>
                            {loading ? "Loading..." : "Continue"}
                        </Button>
                    </div>
                ) : (
                    <>
                        <Typography classNames="text-green-600 font-bold" variant="regular17">
                            Welcome, {login}!
                        </Typography>
                        <Typography variant="regular17">
                            Redirecting in {redirectSeconds}s...
                        </Typography>
                    </>
                )}
            </div>
        </div>
    )
}
