export function TimerContainer() {
    return <div className="timer-container">
        <div class="modes">
            <span id="active">Focus</span>
            <span>Short Break</span>
            <span>Long Break</span>
        </div>
        <div class="timer">
            <span>25:00</span>
        </div>
        <div class="actions">
            <button id="primary">Start</button>
            <button id="secondary">Reset</button>
        </div>
    </div>
}