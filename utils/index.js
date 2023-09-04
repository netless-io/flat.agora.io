export function getCurrentLanguage() {
    return location.pathname.split("/").filter(Boolean)[0] || "en"
}

export function isChinese() {
    return getCurrentLanguage() === "zh"
}

export function macDownloadBody() {
    return isChinese()
        ? ` <div class="modal-header">
                <img class="modal-close-btn" src="../image/close.svg" alt="close modal">
            </div>
            <div class="modal-body">
                <p class="f3">下载更适合你 Mac 的 Agora Flat 版本</p>

                <div class="pa3">
                    <a href="https://flat-storage.oss-accelerate.aliyuncs.com/versions/latest/stable/mac/Flat-arm64-2.2.4.dmg" target="_blank" class="try-btn inline-flex">
                        下载 Apple 芯片版
                    </a>

                    <a href="https://flat-storage.oss-accelerate.aliyuncs.com/versions/latest/stable/mac/Flat-x64-2.2.4.dmg" class="download-btn inline-flex ml1">
                        下载 Intel 芯片版
                    </a>
                </div>
            </div>
            <div class="modal-footer mt4">
                <ul>
                    <li>点击左上角苹果菜单，点击「关于本机」</li>
                    <li>查看芯片类型是「Intel」还是「Apple」，并选择对应版本下载</li>
                </ul> 
            </div>`
        : ` <div class="modal-header">
                <img class="modal-close-btn" src="./image/close.svg" alt="close modal">
            </div>
            <div class="modal-body">
                <p class="f3">Download the suitable Agora Flat version for your Mac</p>

                <div class="pa3">
                    <a href="https://flat-storage.oss-accelerate.aliyuncs.com/versions/latest/stable/mac/Flat-arm64-2.2.4.dmg" target="_blank" class="try-btn inline-flex">
                        Download Apple Silicon
                    </a>

                    <a href="https://flat-storage.oss-accelerate.aliyuncs.com/versions/latest/stable/mac/Flat-x64-2.2.4.dmg" class="download-btn inline-flex ml1">
                        Download Intel Chip
                    </a>
                </div>
            </div>
            <div class="modal-footer mt4">
                <ul>
                    <li>Click the Apple menu at the top left, then choose "About This Mac"</li>
                    <li>Chip type ("Apple" or "Intel") and choose correct version for download</li>
                </ul> 
            </div>`;
}

export function generateModalItem({ value }, callback) {
    const p = document.createElement("p")
    p.innerHTML = value
    p.on("click", callback)
    return p
}

/**
 * 
 * @param {*} param container options
 * @param {*} type mobile or desktop
 * @returns 
 */
export function addModal({ id, bodyCls }, type = "mobile") {

    const modalContainer = type === "mobile" 
                            ? generateMobileModalContainer({ id, bodyCls }) 
                            : generateDesktopModalContainer({ id, bodyCls })

    setTimeout(() => {
        modalContainer.classList.add('active');
    }, 0);

    appendToBody(modalContainer)
    return modalContainer
}

function generateDesktopModalContainer({ id, bodyCls }) {
    const div = document.createElement("div")
    div.setAttribute("id", id)
    div.classList.add('modal-root');
    div.classList.add('disabled');

    div.innerHTML = `
        <div class="modal-mask modal-mask"></div>
        <div class="modal-wrap ${bodyCls}"></div>
    `

    return div
}

function generateMobileModalContainer({ id, bodyCls }) {
    const div = document.createElement("div")
    div.setAttribute("id", id)
    div.classList.add('modal-root');
    div.classList.add('disabled');

    div.innerHTML = `
        <div class="modal-mask modal-mask-mobile"></div>
        <div class="modal-wrap-mobile ${bodyCls}"></div>
    `

    return div
}

function appendToBody(el) {
    el && document.body.append(el)
}