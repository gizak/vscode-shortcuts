import {window, commands, workspace, StatusBarAlignment, StatusBarItem} from 'vscode';

export class Shortcuts {
    private buttons: StatusBarItem[]
    private align: 'left'|'right'
    private priority: number

    constructor(config: any) {
        const align = config.align;
        const priority = config.priority;
        const btns = config.buttons;

        if (align) {
            this.align = align;
        }
        if (priority) {
            this.priority = priority;
        }
        if (btns) {
            this.buttons = btns.map( (btnTx: string|Object): StatusBarItem => {
                if (typeof btnTx === 'object') {
                    return this.fromObjectConfig(btnTx)
                } else {
                    return this.fromStringConfig(btnTx)
                }
            });
        }
    }

    show() {
        this.buttons.forEach(btn => {
            btn.show();
        });
    }

    dispose() {
        this.buttons.forEach(btn => {
            btn.dispose();
        });
    }

    private fromStringConfig(btnTx: string): StatusBarItem {
        const [icon,cmd,tip] = btnTx.split(',').map((tx: string): string => {return tx.trim()});
        const btn = window.createStatusBarItem(StatusBarAlignment.Left);
        btn.text=`$(${icon})`;
        btn.command = cmd;
        btn.tooltip = tip;
        return btn;
    }

    private fromObjectConfig(btnTx: any): StatusBarItem {
        const { icon, command, tooltip, align, priority } = btnTx;
        const btn = window.createStatusBarItem( this.alignFromString(align || this.align), (priority || this.priority) );
        btn.text=`$(${icon})`;
        btn.command = command;
        btn.tooltip = tooltip;
        return btn;
    }

    private alignFromString(align: string): StatusBarAlignment {
        switch (align) {
            case 'right':
                return StatusBarAlignment.Right;
            case 'left': default:
                return StatusBarAlignment.Left;
        }
    }
}
