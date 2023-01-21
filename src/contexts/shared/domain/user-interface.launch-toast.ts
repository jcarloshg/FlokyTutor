
export interface LaunchToastUserInterface {
    run(launchToastParams: LaunchToastParams): Promise<void>,
}

export interface LaunchToastParams {
    typeToast: "error" | "warning" | "success",
    message: string;
    seconds?: number;
}