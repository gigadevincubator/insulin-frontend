import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import Header from '../Header/Header';
import FileInput from '../FileInput/FileInput';
import EditorNavigation from '../EditorNavigation/EditorNavigation';

import style from './Edit.module.css';

export default function Edit() {
  // store tutorial id and language id
  const { id, langid } = useParams();

  // persistent state by storing in localStorage
  const useStickyState = (defaultValue, key) => {
    const [steps, setSteps] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);

      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(steps));
    }, [key, steps]);

    return [steps, setSteps];
  };

  const [steps, setSteps] = useStickyState(
    [
      'A step',
      'Another Step',
      'A third step',
      'A fourth step',
      'A fifth step',
      'A sixth step',
      'A seventh step',
    ],
    'steps'
  );

  const triggerDelete = (i) =>
    setSteps([...steps.slice(0, i), ...steps.slice(i + 1)]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const newStepList = Array.from(steps);
    newStepList.splice(source.index, 1);
    newStepList.splice(
      destination.index,
      0,
      steps[draggableId.replace('step-', '')]
    );
    setSteps(newStepList);
  };

  return (
    <div className={style.edit}>
      <div className={style.editHeader}>
        <Header />
      </div>
      <p className={style.tutEditor}>Tutorial Editor</p>
      <p className={style.title}>Title</p>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Actual Tutorial Title"
          className={style.titleInput}
        />
      </div>
      <div className={style.thumbContainer}>
        <p
          className={style.thumbnail}
          style={{ marginBottom: 3, color: '#58595e' }}
        >
          Thumbnail
        </p>
        <FileInput />
      </div>
      <div className={style.isPublished}>
        <p className={style.isPublishedTxt}>Is published:</p>
        <div className={style.switchContainer}>
          <label className={style.switch}>
            <input type="checkbox" />
            <span className={style.slider}></span>
          </label>
        </div>
      </div>
      <div className={style.stepsContainer}>
        <div className={style.stepsHeader}>
          <p className={style.steps}>Steps</p>
          <p className={style.amountOfSteps}>{steps.length} Steps</p>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={'DP-1'}>
            {(provided) => (
              <div
                className={style.cardsContainer}
                {...provided.droppableProps}
                ref={provided.innerRef}
                key={'steps'}
              >
                {steps.map((step, i) => {
                  return (
                    <Draggable draggableId={'step-' + i} index={i} key={i}>
                      {(provided) => (
                        <div
                          className={style.stepCard}
                          key={i}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <div className={style.bars}>
                            <div className={style.bar}></div>
                            <div className={style.bar}></div>
                            <div className={style.bar}></div>
                          </div>
                          <p className={style.stepTitle}>{step}</p>
                          <FontAwesomeIcon
                            icon={faTrash}
                            className={style.trashIcon}
                            onClick={() => triggerDelete(i)}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <Link
          to={`create-tutorial/steps/${steps.length + 1}`}
          className={style.newStepLink}
        >
          <div className={style.newStepCard}>
            <FontAwesomeIcon icon={faPlus} className={style.plusIcon} />
            <div className={style.stepTitle}>Add new step</div>
          </div>
        </Link>
      </div>
      <EditorNavigation backTo={'/create-tutorial'}>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <div className={style.finishBtn}>
            <FontAwesomeIcon icon={faCheck} className={style.checkIcon} />
            Save
          </div>
        </Link>
      </EditorNavigation>
    </div>
  );
}
