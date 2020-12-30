import { dbService } from 'fBase';
import React, { useState } from 'react';

const Nweet = ({ nweetObj, isOwner }) => {
	const [editing, setEditing] = useState(false);
	const [newNweet, setNewNweet] = useState(nweetObj.text);
	const onDeleteClick = async () => {
		const ok = window.confirm('Are you sure you want to delete this nweet?');
		if (ok) {
			await dbService.doc(`nweets/${nweetObj.id}`).delete();
		}
	};
	const toggleEditting = async () => setEditing((prev) => !prev);
	const onSubmit = async (event) => {
		event.preventDefault();
		await dbService.doc(`nweets/${nweetObj.id}`).update({
			text: newNweet,
		});
		setEditing(false);
	};
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setNewNweet(value);
	};
	return (
		<div>
			{editing ? (
				<>
					{isOwner && (
						<>
							<form>
								<input
									type='text'
									placeholder='Edit your nweet'
									value={newNweet}
									required
									onChange={onChange}
								/>
								<input type='submit' value='Update Nweet' onClick={onSubmit} />
							</form>
						</>
					)}
					<button onClick={toggleEditting}>Cancel</button>
				</>
			) : (
				<>
					<h4>{nweetObj.text}</h4>
					{isOwner && (
						<>
							<button onClick={toggleEditting}>Edit Nweet</button>
							<button onClick={onDeleteClick}>Delete Nweet</button>
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Nweet;