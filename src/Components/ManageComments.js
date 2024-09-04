import saveComments from "@/actions/saveComments";
import Form, { successToast } from "./Form";

export default function ManageComments({ userId, postId }) {
    return (
        <div class="post-comment-box mt--80">
            <Form action={saveComments}>
                <h3 class="form-title">Leave A Reply</h3>
                <p class="desc mb--40">Your email address will not be published. Repuired fields are marked*</p>
                <div class="form-inner inner">
                    <div className="single-input-wrapper">
                        <input type="text" value={postId} name="postId" hidden />
                    </div>
                    <div className="single-input-wrapper">
                        <input type="text" value={userId} name="userId" hidden />
                    </div>
                    <div class="single-input-wrapper">
                        <label for="terms"> Comment*</label>
                        <textarea name="comment" required></textarea>
                    </div>
                    <div class="single-input-wrapper">
                        <button type="submit" class="subscribe-btn tp-btn btn-primary">Post A Comment</button>
                    </div>
                </div>
            </Form>
        </div>
    )
}