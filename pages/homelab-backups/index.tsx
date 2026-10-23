import Head from 'next/head'
import Link from 'next/link'

export default function HomelabBackups() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 leading-relaxed">
      <Head>
        <title>Homelab Backups</title>
      </Head>
      <h1 className="mb-6 text-3xl font-semibold">Homelab Backups</h1>
      <p className="mb-4">
        Homelab Backups is a private, non-commercial tool for storing encrypted
        backups of a personal homelab in Google Drive.
      </p>
      <p className="mb-4">
        It uses Google Drive&apos;s <code>drive.file</code> permission to manage
        files created or explicitly opened by the app. Backups are encrypted
        locally before upload.
      </p>
      <Link href="/homelab-backups/privacy">
        <a className="underline">Privacy policy</a>
      </Link>
    </main>
  )
}
