const db = require('../firebase');

class Task {
  static async getAll() {
    const snapshot = await db.collection('tasks').get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }

  static async add(task) {
    const docRef = await db.collection('tasks').add(task);
    return { id: docRef.id, ...task };
  }

  static async get(id) {
    const doc = await db.collection('tasks').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  }

  static async update(id, task) {
    await db.collection('tasks').doc(id).set(task, { merge: true });
    return { id, ...task };
  }

  static async deleteAll() {
    const snapshot = await db.collection('tasks').get();
    const batch = db.batch();

    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref); // Add delete operation to batch
    });

    await batch.commit();
  }
}

module.exports = Task;
