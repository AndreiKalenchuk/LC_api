export function clearValue(selector) {
    while(selector.getValue().length != 0) {
        selector.click();
        selector.keys(['Control', 'a']);
        selector.keys('Delete');
    }
        return selector;
}