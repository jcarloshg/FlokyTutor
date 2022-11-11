export abstract class Loading {

    private _isLoading: boolean = false;

    constructor() { }

    public get isLoading(): boolean { return this._isLoading }
    public set isLoading(value: boolean) { this._isLoading = value }
}