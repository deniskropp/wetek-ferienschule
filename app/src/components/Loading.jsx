import CircularProgress from "@mui/material/CircularProgress"
import Modal from "@mui/material/Modal"

export function Loading() {
    return (
        <Modal open={true}>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <CircularProgress size={50} />
            </div>
        </Modal>
    )
}
