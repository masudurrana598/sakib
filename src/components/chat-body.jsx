import React, {useRef} from "react";

function ChatBody({ data, autoScroll }) {

    const chatBody = useRef(null);

    return (
        <div className={'chat-body'} ref={chatBody}>
            {
                data.map(
                    (d, i) =>
                        <div key={`chat-${i}`} className={`chat-item ${d.role}`}>
                            <span>{d.name}</span>
                            <p>{ d.message }</p>
                        </div>
                )
            }
        </div>
    );
}

export default ChatBody;