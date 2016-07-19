import {window, commands, workspace, StatusBarAlignment, StatusBarItem} from 'vscode';

export class Shortcuts {
    private buttons: StatusBarItem[]

    constructor(config: any) {
        const btns = config.buttons;
        if (btns) {
            this.buttons = btns.map( (btnTx: string): StatusBarItem => {
                const [icon,cmd,tip] = btnTx.split(',').map((tx: string): string => {return tx.trim()});
                const btn = window.createStatusBarItem(StatusBarAlignment.Left);
                btn.text=`$(${icon})`;
                btn.command = cmd;
                btn.tooltip = tip;
                return btn;
            })
        }
    }

    show() {
        this.buttons.forEach(btn=>{
            btn.show();
        });
    }

    dispose() {
        this.buttons.forEach(btn => {
            btn.dispose();
        });
    }
}