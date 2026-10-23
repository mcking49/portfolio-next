import Head from 'next/head'
import Link from 'next/link'

export default function HomelabBackupsPrivacy() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 leading-relaxed">
      <Head>
        <title>Privacy Policy | Homelab Backups</title>
      </Head>
      <h1 className="mb-6 text-3xl font-semibold">Privacy Policy</h1>
      <p className="mb-4">Homelab Backups is a private tool used only by its owner.</p>
      <p className="mb-4">
        <strong>Access:</strong> Google Drive&apos;s <code>drive.file</code>{' '}
        permission is used to create and manage backup files, not unrelated Drive content.
      </p>
      <p className="mb-4">
        <strong>Use and storage:</strong> Backups are encrypted locally before
        upload to Google Drive. Google Drive data is not sold, used for
        advertising, or shared with third parties.
      </p>
      <p className="mb-4">
        <strong>Retention and control:</strong> Backups remain in Drive until
        deleted by the owner or the configured retention process. Access can be
        revoked in{' '}
        <a className="underline" href="https://myaccount.google.com/permissions">
          Google Account settings
        </a>
        ; revocation does not delete existing backup files.
      </p>
      <Link href="/homelab-backups">
        <a className="underline">Homelab Backups</a>
      </Link>
    </main>
  )
}
