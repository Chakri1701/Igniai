import { createUploadthing } from "uploadthing/next"

const f = createUploadthing()

export const ourFileRouter = {
  resumeUploader: f({ pdf: { maxFileSize: "4MB" }, "application/msword": { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { userId: "user" }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId)
      console.log("file url", file.url)
      return { uploadedBy: metadata.userId }
    }),
}