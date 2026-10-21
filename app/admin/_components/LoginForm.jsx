'use client';
import { useActionState } from 'react';
import { signIn } from '../actions';
import styles from './Admin.module.css';

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(signIn, {});

  return (
    <div className={styles.centered}>
      <form action={formAction} className={styles.card}>
        <h1 className={styles.cardTitle}>Panel girişi</h1>
        <label className={styles.field}>
          <span>E-posta</span>
          <input className={styles.input} name="email" type="email" autoComplete="username" defaultValue={state.email} required />
        </label>
        <label className={styles.field}>
          <span>Şifre</span>
          <input className={styles.input} name="password" type="password" autoComplete="current-password" required />
        </label>
        {state.error && <p className={styles.error} role="alert">{state.error}</p>}
        <button className="btn btn-primary" type="submit" disabled={pending}>
          {pending ? 'Giriş yapılıyor…' : 'Giriş yap'}
        </button>
      </form>
    </div>
  );
}
