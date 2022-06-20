const setMode = (darkMode, focus, shortBreak, longBreak) => {
    if (!darkMode) {
        if (focus) {
            return "focus"
        }
        if (shortBreak) {
            return "short-break"
        }
        if (longBreak) {
            return "long-break"
        }
    }
    if (darkMode) {
        return "dark-mode"
    }
}

const getMode = (focus, shortBreak, longBreak) => {
    if (focus) {
        return "Focus"
    }
    if (shortBreak) {
        return "Short Break"
    }
    if (longBreak) {
        return "Long Break"
    }
}

export { setMode, getMode }